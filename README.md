- [ツールのインストール](#ツールのインストール)
    - [git](#git)
        - [windowsの方](#windowsの方)
        - [Macの方](#macの方)
    - [vscode](#vscode)
- [環境構築](#環境構築)
    - [Mac](#mac)
    - [Windows](#windows)
    - [プロジェクトのclone](#プロジェクトのclone)
    - [サーバーの起動](#サーバーの起動)
    - [ページ確認](#ページ確認)


## ツールのインストール
### git
#### windowsの方
https://gitforwindows.org/

#### Macの方
不要

### vscode
https://code.visualstudio.com/

## 環境構築
### Mac
ターミナルを開く
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
インストールが完了したら以下を実行
```
brew install node
```

インストールが完了したらそれぞれ、実行しバージョンの数字が返ってくることを確認
```
node -v
npm -v
```

参考：　https://qiita.com/sakana_hug/items/7440df68734f3d5ce772
https://nodejs.org/ja

### Windows
コマンドプロンプトを開き、以下を実行する。
```
wsl --install
```
インストールが完了したら、PCを再起動する。

再度コマンドプロンプトを開き、以下を実行
```
wsl.exe --install Ubuntu
```
終わったら以下を実行
```
wsl.exe -d Ubuntu
```
初めての場合は、アカウント作成(パスワード設定)

プロンプトが変わったら、1行ずつ実行
```
sudo apt update 
sudo apt upgrade -y 
sudo reboot
```
再度以下を実行
```
wsl.exe -d Ubuntu
```
プロンプトが変わったら以下を実行
```
sudo apt install nodejs 
sudo apt install npm
```

### プロジェクトのclone
1. terminal(Mac)またはコマンドプロンプト(Windows)を開く
2. 以下を実行
```bash
git clone https://github.com/ShuntaOkuhara/quicknetwork_intern2025_ver2.git
```


### サーバーの起動
```
npm i
npm run dev
```

### ページ確認
http://localhost:3000/
