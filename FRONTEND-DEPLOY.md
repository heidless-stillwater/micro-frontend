# tut
https://titusefferian.medium.com/deploy-your-react-web-apps-with-google-cloud-run-d9f54d29708f

# tut1
https://levelup.gitconnected.com/easy-serverless-deployment-of-your-react-app-using-cloud-run-c26aa79af491

# run locally
```
npm install

npm run build

npm run start
```

# docker
```
docker build . -t micro-frontend

docker network create microNetwork

docker run --rm --name micro-frontend --network microNetwork -p 3000:3000 micro-frontend

# docker run --rm --name micro-frontend -p 3000:3000 micro-frontend

# access docker shell
docker exec -it micro-frontend bash

# check exists
docker image ls
```

# deploy Google Cloud Run
gcloud builds submit --tag gcr.io/cloud-run-install/micro-frontend

gcloud run deploy --image gcr.io/cloud-run-install/micro-frontend --platform managed --port=3000


