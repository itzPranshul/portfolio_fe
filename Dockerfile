# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use Nginx to serve the production build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Step 8: Expose port 80
EXPOSE 80

# Step 9: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
