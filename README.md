# 概要
メモ管理アプリケーション

## 実行方法
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
コンテナとリモート接続をするか、ローカルでnpm installをしたほうがよいです。
```
npm install
```

※node_modulesがないのでエディター上では下記のようにエラーが出る
![image](https://user-images.githubusercontent.com/46466401/180251178-2cf011e1-dd3f-44a1-b82b-91693d6d4b38.png)




