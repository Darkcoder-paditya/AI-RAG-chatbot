# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install uv
RUN pip install uv

# Install any needed packages specified in requirements.txt using uv
RUN uv pip install --system --no-cache -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Copy entrypoint script
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

# Run entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]

# Run gunicorn when the container launches
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend_project.wsgi:application"]
