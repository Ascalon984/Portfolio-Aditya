<#
PowerShell helper: push.ps1
Usage:
  .\push.ps1 -Message "Your commit message"

Behavior:
  - git add -A
  - git commit -m <Message> (skipped if no changes)
  - git fetch origin
  - git pull --rebase origin main
    - if rebase fails, aborts and creates a backup branch with timestamp
  - git push origin main

Notes:
  - This script DOES NOT force push. If you want to overwrite remote, run:
      git push --force origin main
  - Ensure you authenticate with GitHub (credential manager or gh auth) before running.
#>

param(
    [string]$Message = "autocommit: update portfolio"
)

Write-Host "Running automated commit + pull(rebase) + push..." -ForegroundColor Cyan

if (-not (Test-Path ".git")) {
    Write-Error "This directory is not a git repository. Run this script from the repo root."
    exit 1
}

# Stage all changes
git add -A
if ($LASTEXITCODE -ne 0) {
    Write-Error "git add failed (exit $LASTEXITCODE)"
    exit 1
}

# Check if there is anything to commit
$porcelain = git status --porcelain
if ([string]::IsNullOrWhiteSpace($porcelain)) {
    Write-Host "No changes detected. Skipping commit." -ForegroundColor Yellow
} else {
    git commit -m "$Message"
    if ($LASTEXITCODE -ne 0) {
        Write-Error "git commit failed (exit $LASTEXITCODE)"
        exit 1
    }
    Write-Host "Committed changes: $Message" -ForegroundColor Green
}

# Fetch remote updates
git fetch origin
if ($LASTEXITCODE -ne 0) {
    Write-Error "git fetch origin failed (exit $LASTEXITCODE)"
    exit 1
}

# Try to rebase on top of origin/main
Write-Host "Pulling remote changes (rebase)..." -ForegroundColor Cyan
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Rebase failed or conflicts detected." -ForegroundColor Red
    # Try to abort rebase to return to a safe state
    git rebase --abort 2>$null

    # Create a timestamped backup branch
    $ts = Get-Date -Format "yyyyMMddHHmmss"
    $backup = "backup-local-main-$ts"
    git branch $backup
    Write-Host "Created local backup branch: $backup" -ForegroundColor Yellow
    Write-Host "Resolve conflicts manually, then run 'git rebase --continue' or push this backup branch to remote:" -ForegroundColor Yellow
    Write-Host "  git push -u origin $backup" -ForegroundColor Yellow
    exit 2
}

# Push to origin/main
Write-Host "Pushing to origin/main..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed (exit $LASTEXITCODE). You may need to authenticate or use a force push if you intend to overwrite remote." -ForegroundColor Red
    Write-Host "Options:" -ForegroundColor Yellow
    Write-Host "  1) Authenticate (Git Credential Manager or 'gh auth login') and re-run this script." -ForegroundColor Yellow
    Write-Host "  2) To push to a new branch instead (safe):" -ForegroundColor Yellow
    Write-Host "       git push -u origin HEAD:refs/heads/my-local-main-$(Get-Date -Format 'yyyyMMddHHmm')" -ForegroundColor Yellow
    Write-Host "  3) To force overwrite remote (DANGEROUS):" -ForegroundColor Red
    Write-Host "       git push --force origin main" -ForegroundColor Red
    exit 3
}

Write-Host "Push successful." -ForegroundColor Green
exit 0
