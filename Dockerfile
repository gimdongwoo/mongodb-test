FROM node:14-buster

RUN apt-get update \
	&& apt-get install -y openssl \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /var/cache/apt/*

RUN sed -i 's/TLSv1.2/TLSv1.1/g' /etc/ssl/openssl.cnf
RUN sed -i 's/SECLEVEL=2/SECLEVEL=1/g' /etc/ssl/openssl.cnf

WORKDIR /app

# Copy app package
COPY ./index.js /app
#RUN npm install -y mongodb@3.6.9
RUN npm install -y mongodb@4.0.0-beta.6

CMD ["node", "index.js"]
