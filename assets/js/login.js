/**
 * /assets/js/login.js
 * Módulo de autenticação — carregado dinamicamente pela página de login.
 *
 * Expõe:  window.handleLogin(email, password, onError)
 *   - onError(msg)  →  chamado se as credenciais forem inválidas
 *   - redireciona para /dashboard/loginprov/inicial.wgx em caso de sucesso
 */

(function () {
  'use strict';

  /* ── credenciais autorizadas ── */
  var VALID_EMAIL    = 'afonsofreitas534@gmail.com';
  var VALID_PASSWORD = '1122';
  var REDIRECT_URL   = '/dashboard/loginprov/inicial.wgx';

  /**
   * handleLogin
   * @param {string}   email    – endereço de e-mail introduzido
   * @param {string}   password – palavra-passe introduzida
   * @param {Function} onError  – callback(msg) chamado em caso de falha
   */
  window.handleLogin = function (email, password, onError) {
    /* simula latência de rede (300 ms) para feedback realista */
    setTimeout(function () {

      var emailOk = (typeof email === 'string') &&
                    email.trim().toLowerCase() === VALID_EMAIL.toLowerCase();

      var passOk  = (typeof password === 'string') &&
                    password === VALID_PASSWORD;

      if (emailOk && passOk) {
        /* autenticação bem‑sucedida → redireciona */
        window.location.href = REDIRECT_URL;
      } else {
        /* credenciais inválidas → devolve mensagem de erro */
        if (typeof onError === 'function') {
          onError('E-mail ou palavra-passe incorretos. Tente novamente.');
        }
      }

    }, 300);
  };

})();
