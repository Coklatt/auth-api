class AuthenticationRepository {
    async addToken(token) {
        throw new Error('AUTHENTICATION_REPOSITORY.ADD_TOKEN.METHOD_NOT_IMPLEMENTED');
    }

    async checkAvailabilityToken(token) {
        throw new Error('AUTHENTICATION_REPOSITORY.CHECK_AVAILABILITY.METHOD_NOT_IMPLEMENTED');
    }

    async deleteToken(token) {
        throw new Error('AUTHENTICATION_REPOSITORY.DELETE_TOKEN.METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = AuthenticationRepository;
