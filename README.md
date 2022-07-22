# 概要
メモ管理アプリケーション

【front】React(TypeScript)

【back】 JsonServer　※モックサーバ

## 実行方法

docker-compose を使用します。

docker-composeのインストール方法は下記参照

https://docs.docker.jp/compose/install/index.html

### 1. 環境ファイルの作成
```
cp front/.env.example front/.env
```

### 2. ライブラリのインストール
```
docker-compose run --rm front npm install
```

### 3. 起動
```
docker-compose up -d --build
```

## アクセスURL
### サイト
http://localhost:3000

### JsonServer
http://localhost:3001

## エディターでコードを確認する際の注意点
動作が重くなるためライブラリが入っているnode_modulesはコンテナ内とhostのボリュームにしかないので、エディターで確認する場合は
コンテナとリモート接続をするか、frontディレクトリでnpm installをしたほうがよいです。
```
cd front
npm install
```

※node_modulesがないのでエディター上では下記のようにエラーが出る（実行はできる）
![image](https://user-images.githubusercontent.com/46466401/180251178-2cf011e1-dd3f-44a1-b82b-91693d6d4b38.png)




