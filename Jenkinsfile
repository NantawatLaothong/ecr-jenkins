node {
    checkout scm

    docker.withRegistry('https://519135726471.dkr.ecr.us-east-1.amazonaws.com/simple-node', 'ecr:us-east-1:aws-admin') {
        
        def customImage = docker.build("519135726471.dkr.ecr.us-east-1.amazonaws.com/simple-node:${env.BUILD_ID}")
        /* Push the container to the custom Registry */
        customImage.push()
        customImage.push('latest')
    }
}