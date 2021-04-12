from rest_framework import serializers

class ContestsSerializer(serializers.Serializer):
    organizers = serializers.CharField(max_length=200)
    event = serializers.CharField(max_length=200)
    url = serializers.UrlField(max_length=200)
    duration = serializers.CharField(max_length=200)
    start_end_time = serializers.CharField(max_length=200)