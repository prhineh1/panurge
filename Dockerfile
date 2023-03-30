FROM node:lts
WORKDIR /build
COPY . .
RUN npm ci && npm run build:dev
COPY dist .

FROM golang:1.20.2
WORKDIR /Panurge
COPY go.mod go.sum ./
RUN go mod download && go mod verify
# needed for vscode golang extension
RUN go get -v golang.org/x/tools/gopls
COPY . .
RUN go build -o /panurge
EXPOSE 8080
COPY --from=0 /build/dist .
CMD [ "/panurge" ]