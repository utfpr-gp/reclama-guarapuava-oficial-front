import {environment} from '../../../environments/environment';

export class RouteApi {
  static USERS = environment.apiURL + 'users/';
  static LOGIN = environment.apiURL + 'login/';
  static REGISTER = environment.apiURL + 'register';
  static LVL_ACCESS = environment.apiURL + 'users-roles/';
  static GENDERS = environment.apiURL + 'genders/';
  static CITIES = environment.apiURL + 'cities/';
  static NEIGHBORHOOD = environment.apiURL + 'neighborhoods/';
  static CATEGORIES = environment.apiURL + 'categories/';
  static PROBLEMS = environment.apiURL + 'problems/';
  static OCCURRENCES = environment.apiURL + 'occurrences/';
  static COMMENTS = environment.apiURL + 'comments/';
}
