var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'Test Web'
  };

  await ctx.render('index', {
  });
});
module.exports = router;
