nest g lib database api
=> @project/api
nest g lib graphql api
=> @project/api

nest g lib enum shared
=> @project/shared

nest g lib interfaces shared
=> @project/shared

//EntityRepository 이슈가 있어서 다운그레이드
yarn add typeorm@0.2.45

yarn add @nestjs/graphql @nestjs-query/core @nestjs-query/query-graphql @nestjs-query/query-typeorm @nestjs/config @automapper/classes
yarn add graphql-type-json
