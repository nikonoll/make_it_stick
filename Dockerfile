#
#   Build using:    docker build -t nextjs-docker -f Dockerfile .
#   Run using:      docker run -p 3000:3000 -t nextjs-docker
#
FROM node:14.4.0

# Set working directory with in the container
WORKDIR /usr/src/app

# Copy over package.json
COPY package.json .

# Copy dependency lock file
COPY package-lock.json .
## OR
# COPY package-lock.json

# Install pacakge dependencies
# RUN yarn install
## OR
RUN npm ci

# Copy over only source files
# COPY public ./public
# COPY pages ./pages
# COPY components ./components
# COPY helper ./helper
## OR
COPY . .

RUN npx prisma migrate up --experimental
RUN npx prisma generate

# Build the project
RUN npm run-script build

# Expose server port
EXPOSE 3000

CMD [ "npm", "start" ]
