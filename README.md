# How to run this project locally

- docker-compose up -d
- rename `.env.example` to `.env`, then follow `docker-compose.yaml` file
- npm install
- npm run migrate up
- npm run start

## How to create AWS S3 bucket publicly

- create bucket with `Block all public access` disabled
- after bucket created, open your bucket and add this policy to Bucket policy in tab permissions

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowPublicRead",
                "Effect": "Allow",
                "Principal": {
                    "AWS": "*"
                },
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
            }
        ]
    }
    ```

- change `YOUR_BUCKET_NAME` with your bucket name
- save, and all files and folder inside your bucket will be public
