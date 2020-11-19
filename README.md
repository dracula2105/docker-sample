# docker-sample
Docker sample with Node JS
- npm init
- npm install express

- Create Dockerfile
- Build Image:  docker build -t sample-demo:v0.0.1 . 
- Views Image: docker images
- Remove Image: docker rmi -f <image-id>
- Run images: docker run --publish 3001:3000 --detach --name bb sample-demo:v0.0.1 (docker run -p 3001:3000 sample-demo:v0.0.1)
- Views docker: docker ps
- Stop container: docker container stop <ID Container>