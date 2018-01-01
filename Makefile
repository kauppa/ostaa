# Build Output Directories
NPM_BIN = $(shell npm bin)

BUILD_DIR = .build
SRC_BUILD_DIR = /lib

# Prepare for build
prepare:
	
	npm install

# Perform clean up
clean:

	# TypeScript
	if	[ -d "$(BUILD_DIR)" ]; then \
		rm -rf $(BUILD_DIR) ; \
	fi

test: build
	
	$(NPM_BIN)/mocha -r ts-node/register test/**/*.spec.ts #$(JS_BUILD_DIR)/**/*.spec.js

# Build distribution bundle
build: clean

	npm run build

all: test build

.PHONY: all prepare clean build
