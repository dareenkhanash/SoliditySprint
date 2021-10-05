const School = artifacts.require('School');

contract('School', (accounts) => {
  describe('getStudent', () => {
    it('fetches an student by address', async () => {
      const [account] = accounts;
      const school = await School.new();

      // With nothing set, should default to falsey values
      const student = await school.getStudent(account);
      expect(String(student[0])).to.equal('');
      expect(Number(student[1])).to.equal(0);
    });
  });

  describe('setStudent', () => {
    it('creates a new student at a particular address', async () => {
      const [account] = accounts;
      const school = await School.new();

      await school.setStudent(account, "Jack", 30);
      const student = await school.getStudent(account);

      expect(String(student[0])).to.equal("Jack");
      expect(Number(student[1])).to.equal(30);
    });

    it('updates an existing students name and age', async () => {
      const [account] = accounts;
      const school = await School.new();

      await school.setStudent(account, "Jack", 30);
      await school.setStudent(account, "Dareen", 25);
      const student = await school.getStudent(account);

      expect(String(student[0])).to.equal("Dareen");
      expect(Number(student[1])).to.equal(25);
    });
  });

  describe('getStudentsCount', () => {
    it('counts the total number of students', async () => {
      const [first, second, third] = accounts;

      const school = await School.new();

      await school.setStudent(first, "Jack", 30);
      await school.setStudent(second, "Sam", 40);
      await school.setStudent(third, "Ali", 50);

      const count = await school.getStudentsCount();
      expect(Number(count)).to.equal(3);
    });

    it('does not count the same address twice', async () => {
      const [account] = accounts;
      const school = await School.new();

      // Setting different students to the same address should overwrite
      await school.setStudent(account, "Bob", 30);
      await school.setStudent(account, "Alice", 40);

      const count = await school.getStudentsCount();
      expect(Number(count)).to.equal(1);
      
    });
  });
});
