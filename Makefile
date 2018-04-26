
.PHONY: generate

default: generate

generate:
	swagger-codegen generate -i manticore.yaml -c codegen.json -l javascript
