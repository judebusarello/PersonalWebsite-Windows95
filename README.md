# Win95 Personal Site

This my personal website made with React95 and not much else

## To Deploy

In the project directory, you can run:

### `npm run build`

This will create a build directory containing the files to be deployed

### `aws s3 sync build s3://{your bucket name}`

This syncs the build files to your bucket. 
The s3 bucket must be set to serve static websites.

need html-loader for the resume import
