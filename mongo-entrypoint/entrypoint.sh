#!/usr/bin/env bash
echo "Creating mongo users..."

CODE=$(echo "db.createUser({ user: '$DB_USER', pwd: '$DB_PASS',
    roles: [{ 
        role: 'readWrite',
        db: '$DB_NAME'
    }]
});
" | tr -d " \t\n\r")

echo "with $MONGO_INITDB_ROOT_USERNAME $MONGO_INITDB_ROOT_PASSWORD"

mongo admin --host localhost \
    -u $MONGO_INITDB_ROOT_USERNAME \
    -p $MONGO_INITDB_ROOT_PASSWORD \
    --eval $CODE
    
echo "Mongo users created."
