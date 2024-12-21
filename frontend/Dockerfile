FROM node:20

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# パッケージをコピーしてインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "run", "start:prod"]
