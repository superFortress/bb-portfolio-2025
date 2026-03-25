#!/bin/bash

# Target local directory with same directory name
# target_dir="$HOME/Dropbox/Backups/$(basename "$source_dir")"

source_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
target_dir="/Volumes/TINY_BACKUP/portfolio/boriz-baatsen-animator/website/2025Q3_bb-portfolio-2025/develop/app/$("$source_dir")"

exclude=(
    # directories
    "dist"
    "node_modules"
    # helper files
    ".DS_Store"
    ".git"
    ".vite"
)

rsync -av --delete \
    "${exclude[@]/#/--exclude=}" \
    "$source_dir/" \
    "$target_dir/"