import { readFileSync } from 'fs';
import { updateDependency } from './update';

const railsGemfile = readFileSync(
  'lib/manager/bundler/__fixtures__/Gemfile.rails',
  'utf8'
);

describe('manager/docker-compose/update', () => {
  describe('updateDependency', () => {
    it('replaces existing value', () => {
      // gem "rack-cache", "~> 1.2"
      const upgrade = {
        managerData: { lineNumber: 13 },
        depName: 'rack-cache',
        newValue: '~> 1.3',
      };
      const res = updateDependency({
        fileContent: railsGemfile,
        upgrade,
      });
      expect(res).not.toEqual(railsGemfile);
      expect(res.includes(upgrade.newValue)).toBe(true);
    });
    it('returns same', () => {
      // gem "rack-cache", "~> 1.2"
      const upgrade = {
        managerData: { lineNumber: 13 },
        depName: 'rack-cache',
        newValue: '~> 1.2',
      };
      const res = updateDependency({
        fileContent: railsGemfile,
        upgrade,
      });
      expect(res).toEqual(railsGemfile);
    });
    it('returns null if mismatch', () => {
      // gem "rack-cache", "~> 1.2"
      const upgrade = {
        managerData: { lineNumber: 13 },
        depName: 'wrong',
        newValue: '~> 1.3',
      };
      const res = updateDependency({
        fileContent: railsGemfile,
        upgrade,
      });
      expect(res).toBeNull();
    });
    it('uses single quotes', () => {
      const upgrade = {
        managerData: { lineNumber: 0 },
        depName: 'rack-cache',
        newValue: '~> 1.3',
      };
      const gemFile = `gem 'rack-cache', '~> 1.2'`;
      const res = updateDependency({ fileContent: gemFile, upgrade });
      expect(res).toEqual(`gem 'rack-cache', '~> 1.3'`);
    });
    it('returns null if error', () => {
      const res = updateDependency({ fileContent: null, upgrade: null });
      expect(res).toBeNull();
    });
  });
});
