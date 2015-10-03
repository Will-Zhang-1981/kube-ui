angular.module('k8s.sdk.k8sapi').factory('k8sApiPods', function(Restangular, k8sBaseProxyPath) {
  return function(clusterId, namespace) {
    return Restangular.service('api/clusters/' + clusterId + '/proxy/api/v1/namespaces/' + namespace + '/pods');
  };
})