# Install latest version of Node 14
FROM node:14

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Install and cache dependencies
RUN npm install -g truffle@5.2.5

# Copy files
COPY . ./

RUN npx truffle compile
