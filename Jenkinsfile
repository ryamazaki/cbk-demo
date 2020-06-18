//Declarative format
pipeline {
    //agent any
    agent{ docker{ image 'tariqbeans/node:latest'}}
    stages {
        stage('Build') {
            steps {
                echo "Build"
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