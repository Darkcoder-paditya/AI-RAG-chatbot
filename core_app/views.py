from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello from Flask Backend!"}) # Keeping the message same for consistency, though it's Django now :)

@api_view(['GET'])
def health_check(request):
    return Response({"status": "ok"})
