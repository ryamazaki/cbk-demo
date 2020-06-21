//Declarative format
pipeline {
    agent any
    //agent{ docker { image 'tariqbeans/node:latest'} }
    environment {
        dockerHome = tool 'myDocker'
        PATH = "$dockerHome/bin:$PATH"
    }
    stages {
        stage('Checkout from feature branch') {
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
                    app = docker.build("tariqbeans/cbk-demo")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                echo "Push Image to DockerHub"
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-cred') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
        }
                    
                
                }
            }
        }
    }
    post {
        always {
            echo "I always run after post stages!!"
        }
    }
    
}