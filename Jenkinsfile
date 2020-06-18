//Declarative format
pipeline {
    agent any
    //agent{ docker { image 'tariqbeans/node:latest'} }
    environment {
        dockerHome = tool 'myDocker'
        PATH = "$dockerHome/bin:$PATH"
    }
    stages {
        stage('Build') {
            steps {
                echo "Build"
                echo "PATH - $PATH"
                echo "dockerHome - $dockerHome"
                sh 'npm version'
            }
        }
        stage('Test') {
            steps {
                echo "Test"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy"
            }
        }
    }
    post {
        always {
            echo "I always run after post stages"
        }
    }
    
}