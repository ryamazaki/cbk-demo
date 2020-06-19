//Declarative format
pipeline {
    agent any
    //agent{ docker { image 'tariqbeans/node:latest'} }
    environment {
        dockerHome = tool 'myDocker'
        PATH = "$dockerHome/bin:$PATH"
    }
    stages {
        stage('Checkout') {
            steps {
                echo "Build"
                echo "PATH - $PATH"
                sh 'docker version'
                
            }
        }
        stage('Build Docker Image') {
            steps {
                echo "Build Image"
                script{
                    dockerImage = docker.build("tariqbeans/cbk-demo:1.0.0")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                echo "Push Image to DockerHub"
                script {
                    docker.withRegistery('https://registry.hub.docker.com','dockerHub'){
                        dockerImage.push("${env.BUILD_NUMBER}");
                        docker.push("latest")
                    }
                }
            }
        }
    }
    post {
        always {
            echo "I always run after post stages"
        }
    }
    
}