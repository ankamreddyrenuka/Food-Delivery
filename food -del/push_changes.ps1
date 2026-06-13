# Run this locally from your machine where Git is installed.
# It will stage the key files, commit, add remote if missing, and push to main.

Set-StrictMode -Version Latest
cd "C:/Users/DELL/Desktop/food -del"

git status

git add frontend/src/assets/assets.js frontend/src/components/FoodItem/FoodItem.jsx frontend/src/components/FoodItem/FoodItem.css package.json

$commitMsg = "Fix: restore frontend assets.js and fix Vite parse error"

# Only commit if there are staged changes
$staged = git diff --cached --name-only
if ($staged) {
    git commit -m $commitMsg
} else {
    Write-Host "No staged changes to commit."
}

# Add remote if it doesn't exist
try {
    git remote get-url origin > $null 2>&1
    Write-Host "Remote 'origin' already configured."
} catch {
    git remote add origin https://github.com/ankamreddyrenuka/Food-Delivery.git
    Write-Host "Added remote origin."
}

# Ensure branch name and push
git branch -M main
git push -u origin main
