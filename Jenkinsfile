pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh 'pm2 stop -s iteck-admin || echo "iteck-admin not running, continue"'
                sh 'pm2 delete -s iteck-admin || echo "iteck-admin not running, continue"'
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
                sh 'pm2 start process.config.js --env production'
            }
        }
    }
}