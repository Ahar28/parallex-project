REGION="us-east-1"                        # <— your region
REPO="doc"                          # <— your ECR repo name
TAG="v1"                                  # <— the tag you pushed
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGISTRY="${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com"

aws ecr get-login-password --region "${REGION}" \
| docker login --username AWS --password-stdin "$REGISTRY"

docker pull "${REGISTRY}/${REPO}:${TAG}"
