from rest_framework import serializers

class ContestsSerializer(serializers.Serializer):
    event = serializers.CharField(max_length=200)
    url = serializers.UrlField(max_length=200)
    organizers = serializers.CharField(max_length=200)
    start_time = serializers.CharField(max_length=200)
    end_time = serializers.CharField(max_length=200)