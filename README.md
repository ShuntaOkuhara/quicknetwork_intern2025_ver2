## 手順
### gitのインストール
#### windowsの方
https://gitforwindows.org/

#### Macの方
不要なはず

### vscodeのインストール
https://code.visualstudio.com/

### nodeのインストール
#### Mac
https://qiita.com/sakana_hug/items/7440df68734f3d5ce772
https://nodejs.org/ja
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install node

node -v
npm -v
```

#### Windows
```
wsl --install
wsl.exe -d Ubuntu
sudo apt nodejs
npx create-next-app@latest
code .
terminal で
wsl.exe -d Ubuntu
```


### プロジェクトのclone
1. terminal(Mac)またはコマンドプロンプト(Windows)を開く
2. 以下を実行
```bash
git clone https://github.com/ShuntaOkuhara/quicknetwork_intern2025.git
```

### サーバーの起動
```
npm i
npm run dev
```

### ページ確認
http://localhost:3000/
