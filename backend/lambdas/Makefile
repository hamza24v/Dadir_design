# Variables
LAMBDA_NAME = sync_mongodb_sanity
ZIP_FILE = sync.zip
SOURCE_FILES = sync.js syncService.js syncBooking.js syncGallery.js ../db/connection.js
AWS_REGION = us-east-2

.PHONY: clean deploy

clean:
	del $(ZIP_FILE)

install:
	npm install

$(ZIP_FILE): $(SOURCE_FILES) ../node_modules
	zip -r $(ZIP_FILE) $(SOURCE_FILES) ../node_modules

deploy: $(ZIP_FILE)
	aws lambda update-function-code --function-name $(LAMBDA_NAME) --zip-file fileb://$(ZIP_FILE) --region $(AWS_REGION)

