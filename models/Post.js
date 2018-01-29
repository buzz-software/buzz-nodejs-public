/* jshint indent: 2 */

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  Post.associate = function(models) {
    Post.user = Post.belongsTo(models.User);
  }
  return Post;
};