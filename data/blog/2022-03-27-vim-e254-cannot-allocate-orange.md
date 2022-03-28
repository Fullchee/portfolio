---
title: "Creating a documentation culture"
date: "2022-03-26"
---

# E254: Cannot allocate color Orange

After running `brew upgrade vim` to 8.2, I was getting this error.


Following the comments in this StackOverflow post worked for me

https://vi.stackexchange.com/questions/34639/e254-cannot-allocate-color-slateblue


I had to download the `runtime` folder from the official `vim` repo in GitHub and link my `$VIMRUNTIME`

```bash
cd ~
git clone https://github.com/vim/vim.git
mv ~/vim/runtime ~/vim-runtime
rm -rf ~/vim
echo "export VIMRUNTIME=~/vim-runtime" >> ~/.zshrc
```
