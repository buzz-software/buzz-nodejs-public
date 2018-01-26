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
      allowNull: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });

  Post.associate = function(models) {
    Post.author = Post.belongsTo(models.User, {as: 'Author'});
  }
  return Post;
};