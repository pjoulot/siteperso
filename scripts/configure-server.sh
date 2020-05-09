#!/bin/bash

if [ -f scripts/env.sh ]; then
  echo "*** Importing environment variables ***"
  . scripts/env.sh
else
  echo "The environment file (scripts/env.sh) must exist to configure the server."
  exit
fi

NGINX_CONF_LOCAL_FILE="conf/nginx/$WEBSITE_NAME"
NGINX_CONF_SERVER_FILE="/etc/nginx/sites-available/$WEBSITE_NAME"
NGINX_CONF_SERVER_LINK="/etc/nginx/sites-enabled/$WEBSITE_NAME"

APACHE_CONF_LOCAL_FILE="conf/apache/$WEBSITE_NAME.conf"
APACHE_CONF_SERVER_FILE="/etc/apache2/sites-available/$WEBSITE_NAME.conf"
APACHE_CONF_SERVER_LINK="/etc/apache2/sites-enabled/$WEBSITE_NAME.conf"

echo "*** Clean old conf ***"
ssh $DELIVERY_USER@$DELIVERY_SERVER "rm -f $NGINX_CONF_SERVER_LINK;rm -f $NGINX_CONF_SERVER_FILE;rm -f $APACHE_CONF_SERVER_LINK;rm -f $APACHE_CONF_SERVER_FILE;"

echo "*** Add nginx conf ***"
scp -P $DELIVERY_PORT $NGINX_CONF_LOCAL_FILE $DELIVERY_USER@$DELIVERY_SERVER:/etc/nginx/sites-available/
ssh $DELIVERY_USER@$DELIVERY_SERVER "ln -s $NGINX_CONF_SERVER_FILE $NGINX_CONF_SERVER_LINK"
echo "*** Add apache conf ***"
scp -P $DELIVERY_PORT $APACHE_CONF_LOCAL_FILE $DELIVERY_USER@$DELIVERY_SERVER:/etc/apache2/sites-available/
ssh $DELIVERY_USER@$DELIVERY_SERVER "ln -s $APACHE_CONF_SERVER_FILE $APACHE_CONF_SERVER_LINK"

echo "*** Website configured! ***"
echo "*** Don't forget to install the certificate and restart services ***"
