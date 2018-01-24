# !/bin/bash


# Import sequelize models from the database:
sequelize-auto -o "./models" -d visualbuzzdb -h localhost -u expressbuzz -p 5432 -x 123.456 -e postgres

# Fix UUID fields on all models.
find ./models -type f -name "*.js" -exec sed -i.bak '/type: DataTypes.UUIDV4,/s/.*/      type: DataTypes.UUID,\
      defaultValue: DataTypes.UUIDV4,\
      /' {} \;

rm -rf ./models/*.bak

