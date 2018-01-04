pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh 'pm2 stop iteck-admin'
                sh 'pm2 delete iteck-admin'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Start') {
            steps {
                sh 'pm2 restart process.config.js --env production'
            }
        }
    }
}