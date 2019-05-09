
    describe('vaadin-infinite-scroller', function() {
      var scroller;

      beforeEach(function(done) {
        scroller = document.querySelector('#scroller');

        Polymer.RenderStatus.afterNextRender(scroller, function() {
          Polymer.Base.async(done, 1);
        });

        scroller.active = true;
      });

      function verifyPosition() {
        var item = getFirstVisibleItem(scroller);
        expect(item.textContent - scroller.position).to.be.below(1);

        var scrollDiff = item.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
        var ratio = scrollDiff / scroller.itemHeight;
        var remainder = scroller.position % 1;
        expect(Math.abs(remainder + ratio) - 1).to.be.below(0.1);
      }

      it('should default to position 0', function() {
        expect(parseInt(scroller.position, 10)).to.equal(0);
      });

      it('should have correct item height', function() {
        expect(getFirstVisibleItem(scroller).clientHeight).to.equal(30);
      });

      it('should have correct buffer count', function() {
        expect(scroller.$$('.buffer').children).to.have.length(80);
      });

      it('should reflect currently visible item index as position scrolling down', function(done) {
        function scrollDown() {
          verifyPosition();
          if (scroller.position > scroller.bufferSize * 1.5) {
            done();
          } else {
            scroller.$.scroller.scrollTop += scroller.itemHeight * 3.7;
            scroller.async(scrollDown, 30);
          }
        }

        scrollDown();
      });

      it('should reflect currently visible item index as position scrolling up', function(done) {
        function scrollUp() {
          verifyPosition();
          if (scroller.position < -scroller.bufferSize * 1.5) {
            done();
          } else {
            scroller.$.scroller.scrollTop -= scroller.itemHeight * 3.7;
            scroller.async(scrollUp, 30);
          }
        }

        scrollUp();
      });

      it('should reflect position as currently visible item index', function() {
        scroller.position = -5;
        while (scroller.position < 5) {
          scroller.position += 1.1;
          verifyPosition();
        }
      });

      it('should fire non-bubbling custom-scroll events', function(done) {
        function customScrollListener(e) {
          scroller.removeEventListener('custom-scroll', customScrollListener);
          expect(e.bubbles).to.be.false;
          done();
        }

        scroller.addEventListener('custom-scroll', customScrollListener);

        scroller.$.scroller.scrollTop += 10;
      });

      it('should not fire custom-scroll events', function(done) {
        var spy = sinon.spy();
        scroller.addEventListener('custom-scroll', spy);
        listenForEvent(scroller.$.scroller, 'scroll', function() {
          expect(spy.called).to.be.false;
          done();
        });
        scroller.position = 10;
      });

      it('should not animate on second attach', function(done) {
        var spy = sinon.spy();
        scroller.addEventListener('animationstart', spy);
        var parent = scroller.parentNode;
        parent.removeChild(scroller);
        parent.appendChild(scroller);
        setTimeout(function() {
          expect(spy.called).to.be.false;
          done();
        });
      });

      it('should have an instance stamped to every wrapper', function(done) {
        scroller._buffers.forEach(function(buffer) {
          [].forEach.call(buffer.children, function(itemWrapper) {
            expect(itemWrapper.firstElementChild).to.be.ok;
          });
        }, this);
        done();
      });

    });
  