- [ツールのインストール](#ツールのインストール)
    - [git](#git)
        - [windowsの方](#windowsの方)
        - [Macの方](#macの方)
    - [vscode](#vscode)
- [環境構築](#環境構築)
    - [Mac](#mac)
    - [Windows](#windows)
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
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
何度かパスワードが聞かれるので、本体のパスワードを回答

終了後に以下のような画面になると思うので、Run these commands ....という記述の下３行をコピーして、ターミナルで実行
![homebrewインストール後](<Homebrew.png>)

完了したら以下を実行し、バージョンの数字が返ってくることを確認
```bash
brew -v
```

完了したら以下を実行
```bash
brew install node
```

インストールが完了したらそれぞれ、実行しバージョンの数字が返ってくることを確認
```bash
node -v
npm -v
```

参考：　https://qiita.com/sakana_hug/items/7440df68734f3d5ce772
https://nodejs.org/ja

### Windows
コマンドプロンプトを開き、以下を実行する。
```bash
wsl --install
```
インストールが完了したら、PCを再起動する。

再度コマンドプロンプトを開き、以下を実行
```bash
wsl.exe --install Ubuntu
```
終わったら以下を実行
```bash
wsl.exe -d Ubuntu
```
初めての場合は、アカウント作成(パスワード設定)

プロンプトが変わったら、1行ずつ実行(パスワードが聞かれた場合は、先ほど設定のものを打ち込む)
```
sudo apt update 
sudo apt upgrade -y 
sudo reboot
```
再度以下を実行
```bash
wsl.exe -d Ubuntu
```
プロンプトが変わったら以下を実行
```bash
sudo apt install nodejs 
```
[Y/n]と聞かれるので、Yと回答、その後終わったら以下を実行
```bash
sudo apt install npm
```
[Y/n]と聞かれるので、Yと回答

終了したらプロジェクトをcloneする。
```bash
git clone https://github.com/ShuntaOkuhara/quicknetwork_intern2025_ver2.git
```

### サーバーの起動
ダウンロードが完了したら
```
cd quicknetwork_intern2025_ver2/src
```

```
npm i
npm run dev
```

### ページ確認
http://localhost:3000/
