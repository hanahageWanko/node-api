const NODE_ENV_TEST_KEYWORD = 'test';

/**
 * @description 定数オブジェクトのFactory
 */

 const FACTORY_HOOK: (staticInstance: any) => void = staticInstance => {
   this.instance = staticInstance;
   this.originalInstance = this.instance;
   console.log(this);
 };
 FACTORY_HOOK.prototype.getInstance = () => {
   return this.instance;
 };
 if( process.env.NODE_ENV === NODE_ENV_TEST_KEYWORD ) {
   FACTORY_HOOK.prototype.setStub = value => {
     this.instance = value;
   };
   FACTORY_HOOK.prototype.restoreOriginal = () => {
     this.instance = this.originalInstance;
   };
 }

 exports.FACTORY_HOOK = FACTORY_HOOK;