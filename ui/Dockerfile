FROM node:18-alpine

# Set the working directory in the container
WORKDIR /ui

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Debugging
RUN ls -R /ui
RUN ls -R /ui/public
RUN ls -R /ui/src
# && sleep infinity

# Build the React app
RUN npm run build
# RUN ls -R /ui && ls -R /ui/src && ls -R /ui/public && sleep infinity


# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]