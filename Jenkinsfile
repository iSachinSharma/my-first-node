pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/iSachinSharma/my-first-node.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                pkill -f "node index.js" || true
                nohup node index.js > app.log 2>&1 &
                '''
            }
        }
    }
}