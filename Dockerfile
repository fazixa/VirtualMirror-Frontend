# Use the specified Node.js base image
FROM node:16.20.2

# Set the working directory inside the container
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/fazixa/VirtualMirror-Frontend.git /app

# Install dependencies with the specified flag
RUN npm install --legacy-peer-deps

# Expose the port your application will use (optional)
EXPOSE 8080

# Set the default command to start the application
CMD ["npm", "run", "serve"]
